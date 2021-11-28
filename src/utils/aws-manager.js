const AWS = require('aws-sdk');
const Utils = require('./utils');
AWS.config.update({region:'us-east-1'});

class AwsManager {

    static EventBridge = new AWS.EventBridge();

    static createEvent = async (announcement) => {
        await AwsManager.createEventBridgeRule(announcement);
        await AwsManager.setRuleTarget(announcement);
    }
    
    static createEventBridgeRule = async (announcement) => {
        const { id, schedule } = announcement;

        const scheduleExpression = Utils.numberToCron(schedule);

        const params = {
            Name: id,
            Description: "1Announce Announcement Trigger",
            ScheduleExpression: scheduleExpression
        }

        const result = await AwsManager.EventBridge.putRule(params).promise();
        console.log(result);
    }
    
    static setRuleTarget = async (announcement) => {
        const { id, messages } = announcement;

        const input = {
            announcement: messages,
            id: id
        }

        const discord_target = {
            Id: Utils.getUniqueId(),
            Arn: "arn:aws:lambda:us-east-1:169345517357:function:1Announce-Discord",
            Input: JSON.stringify(input)
        }

        const params = {
            Rule: id,
            Targets: [discord_target],
        }

        const result = await AwsManager.EventBridge.putTargets(params).promise();
        console.log(result);
    }

}

module.exports = AwsManager;