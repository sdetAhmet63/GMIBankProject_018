$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_22.feature");
formatter.feature({
  "name": "System should allow to read all states info using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@us22statesDBtests"
    }
  ]
});
formatter.scenario({
  "name": "Read all states you created and validate them from your data set",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us22statesDBtests"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user gets all data for states using api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user deserializes states data as json to java pojo",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates the data for states",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});