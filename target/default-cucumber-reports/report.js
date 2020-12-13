$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_11.feature");
formatter.feature({
  "name": "us_11 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@us_11"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create Date negative test (for in the past)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc11_01"
    }
  ]
});
formatter.step({
  "name": "user send data to date box \"\u003cCreate Date\u003e \"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies valid data entry to Create Date box",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Dates",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Create Date"
      ]
    },
    {
      "cells": [
        "12.12.2015 12:00"
      ]
    },
    {
      "cells": [
        "01.20.2020 11:15"
      ]
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create Date negative test (for in the past)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_01"
    }
  ]
});
formatter.step({
  "name": "user send data to date box \"12.12.2015 12:00 \"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_send_data_to_date_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to Create Date box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_valid_data_entry_to_Create_Date_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create Date negative test (for in the past)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_01"
    }
  ]
});
formatter.step({
  "name": "user send data to date box \"01.20.2020 11:15 \"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_send_data_to_date_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to Create Date box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_valid_data_entry_to_Create_Date_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_1102 Date format negative test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc11_02"
    }
  ]
});
formatter.step({
  "name": "user send invalid data format to date box \"\u003cCreate Date Invalid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies invalid data entry to Create Date box",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Dates",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Create Date Invalid"
      ]
    },
    {
      "cells": [
        "01.12.2020"
      ]
    },
    {
      "cells": [
        "01.20.2021 11"
      ]
    },
    {
      "cells": [
        "11.2021 09:30"
      ]
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1102 Date format negative test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_02"
    }
  ]
});
formatter.step({
  "name": "user send invalid data format to date box \"01.12.2020\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_send_invalid_data_format_to_date_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid data entry to Create Date box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_invalid_data_entry_to_Create_Date_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1102 Date format negative test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_02"
    }
  ]
});
formatter.step({
  "name": "user send invalid data format to date box \"01.20.2021 11\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_send_invalid_data_format_to_date_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid data entry to Create Date box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_invalid_data_entry_to_Create_Date_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1102 Date format negative test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_02"
    }
  ]
});
formatter.step({
  "name": "user send invalid data format to date box \"11.2021 09:30\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_send_invalid_data_format_to_date_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid data entry to Create Date box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_invalid_data_entry_to_Create_Date_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_1103 Date format positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc11_03"
    }
  ]
});
formatter.step({
  "name": "user send valid data format to date box \"\u003cCreate Date Valid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies valid date format to Create Date box",
  "keyword": "And "
});
formatter.examples({
  "name": "Test Dates",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Create Date Valid"
      ]
    },
    {
      "cells": [
        "12.30.2020 12:00"
      ]
    },
    {
      "cells": [
        "01.21.2021 11:15"
      ]
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_1103 Date format positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_03"
    }
  ]
});
formatter.step({
  "name": "user send valid data format to date box \"12.30.2020 12:00\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_send_valid_data_format_to_date_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid date format to Create Date box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_valid_date_format_to_Create_Date_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks entry button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_entry_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks  signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"team18_employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Team18employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_manageCustomers_link()"
});
