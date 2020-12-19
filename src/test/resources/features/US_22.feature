@us22statesDBtests
  Feature:US_22 Validate all states
    Scenario:in states read all states you created and validate them data set
      Given in states user sets all response using end point"https://www.gmibank.com/api/tp-states"
      And  in states user deserialization data json to java pojo
      Then  in states user validate data





