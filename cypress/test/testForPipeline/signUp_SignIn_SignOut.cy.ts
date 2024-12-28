/*1) This is a pipeline test where we want to execute all tests back-to-back
  2) For this we need a minimal test for sign-out after the account creation i.e. sign-up
  3) Though, we can use it within the sign-up script but, it will be good 
     if we create a separate test for this
  4) After that we can do the sign-in
  5) Finally, after block in the e2e.ts will be executed
*/
import "cypress/test/signUp.cy";
import "cypress/test/testForPipeline/minimalTestToLogOut";
import "cypress/test/signIn.cy";
