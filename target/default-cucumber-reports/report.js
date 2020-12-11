$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us01.feature");
formatter.feature({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.scenarioOutline({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"\u003cSSN Number\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for SSN",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN Number"
      ]
    },
    {
      "cells": [
        "111-11-1111"
      ]
    },
    {
      "cells": [
        "111-22-3333"
      ]
    },
    {
      "cells": [
        "111-55-1111"
      ]
    },
    {
      "cells": [
        "999-99-9999"
      ]
    },
    {
      "cells": [
        "999-99-1111"
      ]
    },
    {
      "cells": [
        "222-11-1111"
      ]
    },
    {
      "cells": [
        "456-25-1634"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"111-11-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"111-22-3333\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"111-55-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"999-99-9999\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting(US_01_StepDefinitions.java:41)\r\n\tat ✽.There should be a valid SSN respecting(file:///C:/Users/admin/IdeaProjects/GMIBankProject_018/src/test/resources/features/us01.feature:12)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"999-99-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting(US_01_StepDefinitions.java:41)\r\n\tat ✽.There should be a valid SSN respecting(file:///C:/Users/admin/IdeaProjects/GMIBankProject_018/src/test/resources/features/us01.feature:12)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"222-11-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"456-25-1634\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "There should be a valid name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC02"
    }
  ]
});
formatter.step({
  "name": "Enter the name \"\u003cFirst Name\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First Name"
      ]
    },
    {
      "cells": [
        "H"
      ]
    },
    {
      "cells": [
        "Basderwerzcxvpk"
      ]
    },
    {
      "cells": [
        "Hasan"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC02"
    }
  ]
});
formatter.step({
  "name": "Enter the name \"H\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_last_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC02"
    }
  ]
});
formatter.step({
  "name": "Enter the name \"Basderwerzcxvpk\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_last_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC02"
    }
  ]
});
formatter.step({
  "name": "Enter the name \"Hasan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_last_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "There should be a valid last name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC03"
    }
  ]
});
formatter.step({
  "name": "Enter the last name \"\u003cLast Name\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Last Name"
      ]
    },
    {
      "cells": [
        "Basdfgkopmvcjkflda"
      ]
    },
    {
      "cells": [
        "H"
      ]
    },
    {
      "cells": [
        "Kara"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid last name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC03"
    }
  ]
});
formatter.step({
  "name": "Enter the last name \"Basdfgkopmvcjkflda\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_Address_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid last name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC03"
    }
  ]
});
formatter.step({
  "name": "Enter the last name \"H\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_Address_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid last name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC03"
    }
  ]
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_Address_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "We can provide chars and digits to describe a valid address along with zip code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC04"
    }
  ]
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on mobile phone number box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_mobile_phone_number_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid address respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_address_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"\u003cMobile Phone Number\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Mobile Phone Number"
      ]
    },
    {
      "cells": [
        "000-111-1111"
      ]
    },
    {
      "cells": [
        "111-000-0000"
      ]
    },
    {
      "cells": [
        "999-999-9999"
      ]
    },
    {
      "cells": [
        "000-000-0000"
      ]
    },
    {
      "cells": [
        "999-000-1111"
      ]
    },
    {
      "cells": [
        "000-999-1111"
      ]
    },
    {
      "cells": [
        "567-891-1294"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"000-111-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"111-000-0000\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"999-999-9999\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"000-000-0000\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"999-000-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"000-999-1111\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the GSM \"567-891-1294\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User cannot use just digits for username, but can use any chars and digits along with them and of any length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC06"
    }
  ]
});
formatter.step({
  "name": "Enter the valid username \"\u003cusername\u003e\" with valid credentail",
  "keyword": "And "
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "g"
      ]
    },
    {
      "cells": [
        "g1"
      ]
    },
    {
      "cells": [
        "gmibankuser"
      ]
    },
    {
      "cells": [
        "gmibankuser01"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot use just digits for username, but can use any chars and digits along with them and of any length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC06"
    }
  ]
});
formatter.step({
  "name": "Enter the valid username \"g\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot use just digits for username, but can use any chars and digits along with them and of any length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC06"
    }
  ]
});
formatter.step({
  "name": "Enter the valid username \"g1\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot use just digits for username, but can use any chars and digits along with them and of any length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC06"
    }
  ]
});
formatter.step({
  "name": "Enter the valid username \"gmibankuser\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot use just digits for username, but can use any chars and digits along with them and of any length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC06"
    }
  ]
});
formatter.step({
  "name": "Enter the valid username \"gmibankuser01\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "We should provide a valid email format that contains \"@\", \".com\" extensions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC07"
    }
  ]
});
formatter.step({
  "name": "Enter the e-mail \"\u003cemail\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "a@gmail.com"
      ]
    },
    {
      "cells": [
        "a@b.com"
      ]
    },
    {
      "cells": [
        "gmibankuser01@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "We should provide a valid email format that contains \"@\", \".com\" extensions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC07"
    }
  ]
});
formatter.step({
  "name": "Enter the e-mail \"a@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "We should provide a valid email format that contains \"@\", \".com\" extensions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC07"
    }
  ]
});
formatter.step({
  "name": "Enter the e-mail \"a@b.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "We should provide a valid email format that contains \"@\", \".com\" extensions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC07"
    }
  ]
});
formatter.step({
  "name": "Enter the e-mail \"gmibankuser01@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Password is required to be at least 4 characters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC08"
    }
  ]
});
formatter.step({
  "name": "Enter the new \"\u003cpassword\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "click on new password confirmation box",
  "keyword": "And "
});
formatter.step({
  "name": "There should be a valid password respecting",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "234@!Abc+\u003d"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Password is required to be at least 4 characters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC08"
    }
  ]
});
formatter.step({
  "name": "Enter the new \"234@!Abc+\u003d\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new password confirmation box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_confirmation_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid password respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_password_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Password confirmation entry should be same with password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC09"
    }
  ]
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+\u003d\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_same_password_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on new password box02",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box02()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entry should be same with password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.entry_should_be_same_with_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"\u003cSSN Number\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the name \"\u003cFirst Name\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the last name \"\u003cLast Name\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the GSM \"\u003cMobile Phone Number\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the valid username \"\u003cusername\u003e\" with valid credentail",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the e-mail \"\u003cemail\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the new \"\u003cpassword\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+\u003d\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN Number",
        "First Name",
        "Last Name",
        "Mobile Phone Number",
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "456-35-6634",
        "Hasan",
        "Kara",
        "567-891-8294",
        "gmibankuser01",
        "gmibankuser01@gmail.com",
        "234@!Abc+\u003d"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"456-35-6634\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the name \"Hasan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the GSM \"567-891-8294\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the valid username \"gmibankuser01\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the e-mail \"gmibankuser01@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+\u003d\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+\u003d\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_same_password_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_Succes_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027Toastify__toast Toastify__toast--success toastify-toast\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-LAMCHMC\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56249}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6f0139ff362eb2ae2029718e84036d73\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027Toastify__toast Toastify__toast--success toastify-toast\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_Succes_message(US_01_StepDefinitions.java:210)\r\n\tat ✽.There should be Succes message.(file:///C:/Users/admin/IdeaProjects/GMIBankProject_018/src/test/resources/features/us01.feature:126)\r\n",
  "status": "failed"
});
});