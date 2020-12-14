$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_08.feature");
formatter.feature({
  "name": "Password Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_008"
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_008 TC_001 Old password can not be used again",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_001"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifies there is old password passord bug",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.verifies_there_is_old_password_bug()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US_008 TC_00\u003cnumbers\u003e new password should have at least 1 \"\u003ccharacter\u003e\" to change line1 color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_008-TC_00-2-3-4-5"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.step({
  "name": "enter new seven chars \"\u003cpassword\u003e\" and verifies that  should be at least one \"\u003ccharacter\u003e\" at new password and level chart changes accordingly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "numbers",
        "character",
        "password"
      ]
    },
    {
      "cells": [
        "2",
        "lowercase",
        "111111a"
      ]
    },
    {
      "cells": [
        "3",
        "uppercase",
        "111111A"
      ]
    },
    {
      "cells": [
        "4",
        "special",
        "111111_"
      ]
    },
    {
      "cells": [
        "5",
        "digit",
        "aaaaaa1"
      ]
    }
  ]
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_008 TC_002 new password should have at least 1 \"lowercase\" to change line1 color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_00-2-3-4-5"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter new seven chars \"111111a\" and verifies that  should be at least one \"lowercase\" at new password and level chart changes accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.enter_new_seven_chars_and_verifies_that_should_be_at_least_one_at_new_password_and_level_chart_changes_accordingly(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_008 TC_003 new password should have at least 1 \"uppercase\" to change line1 color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_00-2-3-4-5"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter new seven chars \"111111A\" and verifies that  should be at least one \"uppercase\" at new password and level chart changes accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.enter_new_seven_chars_and_verifies_that_should_be_at_least_one_at_new_password_and_level_chart_changes_accordingly(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_008 TC_004 new password should have at least 1 \"special\" to change line1 color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_00-2-3-4-5"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter new seven chars \"111111_\" and verifies that  should be at least one \"special\" at new password and level chart changes accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.enter_new_seven_chars_and_verifies_that_should_be_at_least_one_at_new_password_and_level_chart_changes_accordingly(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_008 TC_005 new password should have at least 1 \"digit\" to change line1 color of chart color",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_00-2-3-4-5"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter new seven chars \"aaaaaa1\" and verifies that  should be at least one \"digit\" at new password and level chart changes accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.enter_new_seven_chars_and_verifies_that_should_be_at_least_one_at_new_password_and_level_chart_changes_accordingly(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_008 TC_006 New password should have at least 4 chars",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_006"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifies there is one bug that new password accepts at least four char",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.verifies_there_is_one_bug_that_new_password_accepts_at_least_four_char()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Semras-MacBook-Pro.local\u0027, ip: \u00272600:8805:d885:8200:802a:16ef:2e6f:54c4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/7l/rzpj2_kn60z...}, goog:chromeOptions: {debuggerAddress: localhost:59671}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 00b2d13841e16785740d6103a040ee39\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat gmibank.utilities.Driver.getDriver(Driver.java:62)\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:25)\n",
  "status": "failed"
});
formatter.background({
  "name": "User signs in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \"http://www.gmibank.com/login\" loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_goes_to_loginpage(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_08_StepDefinitions\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Semras-MacBook-Pro.local\u0027, ip: \u00272600:8805:d885:8200:802a:16ef:2e6f:54c4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/7l/rzpj2_kn60z...}, goog:chromeOptions: {debuggerAddress: localhost:59671}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 00b2d13841e16785740d6103a040ee39\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat gmibank.utilities.Driver.getDriver(Driver.java:62)\n\tat gmibank.pages.US_08_Page.\u003cinit\u003e(US_08_Page.java:11)\n\tat gmibank.stepdefinitions.US_08_StepDefinitions.\u003cinit\u003e(US_08_StepDefinitions.java:11)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user provides valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_provides_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_008 TC_007 New password should be confirmed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_008"
    },
    {
      "name": "@US_008-TC_007"
    }
  ]
});
formatter.step({
  "name": "user clicks to account menu",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_account_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks to password button to edit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.user_clicks_to_password_button_to_edit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verifies that new valid password must be confirmed",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_StepDefinitions.verifies_that_new_valid_password_must_be_confirmed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Semras-MacBook-Pro.local\u0027, ip: \u00272600:8805:d885:8200:802a:16ef:2e6f:54c4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/7l/rzpj2_kn60z...}, goog:chromeOptions: {debuggerAddress: localhost:59671}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 00b2d13841e16785740d6103a040ee39\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat gmibank.utilities.Driver.getDriver(Driver.java:62)\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:25)\n",
  "status": "failed"
});
});