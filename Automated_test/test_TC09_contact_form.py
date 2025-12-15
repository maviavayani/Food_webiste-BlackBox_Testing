from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest

class TC09_ContactForm(BaseTest):

    def test_contact_form(self):
        wait = WebDriverWait(self.driver, 10)

        try:
            popup_close_btn = wait.until(EC.element_to_be_clickable((By.ID, "closeModal")))
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", popup_close_btn)
            time.sleep(1)
            self.driver.execute_script("arguments[0].click();", popup_close_btn)
            time.sleep(2)
            print("Popup closed successfully")
        except:
            print("Popup already closed or not visible")


        self.driver.execute_script("document.querySelector('#contact').scrollIntoView({behavior:'smooth', block:'center'});")
        time.sleep(2) 

        name_field = wait.until(EC.visibility_of_element_located((By.NAME, "name")))
        email_field = wait.until(EC.visibility_of_element_located((By.NAME, "email")))
        message_field = wait.until(EC.visibility_of_element_located((By.TAG_NAME, "textarea")))

        self.driver.execute_script("""
            arguments[0].value = 'Test User';
            arguments[1].value = 'test@test.com';
            arguments[2].value = 'Hello from automated test';
        """, name_field, email_field, message_field)

        submit_btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[text()='Send Message']")))
        self.driver.execute_script("arguments[0].click();", submit_btn)
        time.sleep(3)

        try:
            msg_div = wait.until(EC.visibility_of_element_located((By.ID, "contact-msg")))
            self.assertTrue(len(msg_div.text) > 0)
            print(f"TC-09 PASS: Contact form submitted, message shown -> {msg_div.text}")
        except:
            print("TC-09 FAIL: Submission message not displayed")
            raise

if __name__ == "__main__":
    unittest.main(verbosity=2)
