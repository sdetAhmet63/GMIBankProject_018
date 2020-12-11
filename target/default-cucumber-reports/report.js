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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_first_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_last_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_last_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_last_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_Address_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_Address_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_Address_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on mobile phone number box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_mobile_phone_number_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid address respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_address_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_email_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on new password confirmation box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_confirmation_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid password respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_a_valid_password_respecting()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on new password box02",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_on_new_password_box02()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "entry should be same with password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.entry_should_be_same_with_password()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_StepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor4.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException: Cannot invoke \"java.util.Properties.getProperty(String)\" because \"gmibank.utilities.ConfigurationReader.properties\" is null\r\n\tat gmibank.utilities.ConfigurationReader.getProperty(ConfigurationReader.java:19)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:35)\r\n\tat gmibank.pages.US_01_02Page.\u003cinit\u003e(US_01_02Page.java:11)\r\n\tat gmibank.stepdefinitions.US_01_StepDefinitions.\u003cinit\u003e(US_01_StepDefinitions.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Enter the name \"Hasan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the GSM \"567-891-8294\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the valid username \"gmibankuser01\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the e-mail \"gmibankuser01@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+\u003d\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+\u003d\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.enter_the_same_password_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.click_to_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_StepDefinitions.there_should_be_Succes_message()"
});
formatter.result({
  "status": "skipped"
});
});