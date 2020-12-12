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
formatter.step({
  "name": "user signOut",
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51262}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8d83e986e879742408561f9e8e2e8079\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51320}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5f1f76823110dff4bea1e710ab71001d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
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
formatter.step({
  "name": "user signOut",
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51383}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5e6cfaeca8cb0e90806e4eecfe4b07cd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_invalid_data_entry_to_Create_Date_box(US_11_StepDefinitions.java:101)\r\n\tat ✽.user verifies invalid data entry to Create Date box(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_invalid_data_entry_to_Create_Date_box(US_11_StepDefinitions.java:101)\r\n\tat ✽.user verifies invalid data entry to Create Date box(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
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
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51586}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5063d7808b839d1d43ef67071cd41bc7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:40)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
  "name": "user send valid data format to date box \"01.21.2021 11:15\"",
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
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51613}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f1d813ee8a14b93b72968b55f86a96c5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:40)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
  "name": "User positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_04"
    }
  ]
});
formatter.step({
  "name": "user select a user from dropbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_select_a_user_from_dropbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies a user can be selected",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_a_user_can_be_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51644}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4a0fea103e1c7dda0ac7fef7fa7e6efa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:51)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
  "name": "Account positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_05"
    }
  ]
});
formatter.step({
  "name": "user select an account from dropbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_select_an_account_from_dropbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //select[@id\u003d‘tp-customer-account’] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//select[@id\u003d‘tp-customer-account’]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51673}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cfdee42a44add081a42fa02a977ac698\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d‘tp-customer-account’]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_select_an_account_from_dropbox(US_11_StepDefinitions.java:142)\r\n\tat ✽.user select an account from dropbox(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifies an account can be selected",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_an_account_can_be_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png", null);
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
  "location": "gmibank.stepdefinitions.US_016_StepDefinitions.user_clicks_signIn_button()"
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
  "name": "Zelle Enrolled option checkbox positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us_11"
    },
    {
      "name": "@tc11_06"
    }
  ]
});
formatter.step({
  "name": "user select Zelle Enrolled checkbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_select_Zelle_Enrolled_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies is selected",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_verifies_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J02Q3B5\u0027, ip: \u0027192.168.2.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_11_StepDefinitions.user_signOut(US_11_StepDefinitions.java:89)\r\n\tat ✽.user signOut(file:///C:/Users/user/IdeaProjects/GMIBankProject_018/src/test/resources/features/us_11.feature:64)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
});