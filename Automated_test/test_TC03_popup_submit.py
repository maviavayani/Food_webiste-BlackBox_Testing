from base_test import BaseTest
from selenium.webdriver.common.by import By
import time
import unittest
class TC03_FillPopup(BaseTest):

    def test_fill_popup(self):
        self.driver.execute_script("document.getElementById('city').value='Karachi'")
        self.driver.execute_script("document.getElementById('location').value='DHA'")
        self.driver.execute_script("document.getElementById('contact').value='03012345678'")
        btn = self.driver.find_element(By.CLASS_NAME, "modal-btn")
        self.driver.execute_script("arguments[0].click()", btn)
        time.sleep(2)
        print("TC-03 PASS: Popup form submitted")
if __name__ == "__main__":
    unittest.main(verbosity=2)