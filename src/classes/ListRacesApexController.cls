public with sharing class ListRacesApexController {
    @AuraEnabled
    public static List<Race__c> getRacesDB(){
    	return [SELECT 	ID, 
    					NAME,
    					DateTime__c,
    					Attended__c,
    					Type__c,
    					Results__c 
    			FROM Race__c];
    }
}