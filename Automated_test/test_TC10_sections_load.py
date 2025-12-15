from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest
class TC10_PageSections(BaseTest):
    def test_sections(self):
        wait = WebDriverWait(self.driver, 10)  
        try:
            popup_close_btn = wait.until(EC.element_to_be_clickable((By.ID, "closeModal")))
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", popup_close_btn)
            time.sleep(1)
            self.driver.execute_script("arguments[0].click();", popup_close_btn)
            time.sleep(1)
            print("Popup closed successfully before checking sections")
        except:
            print("Popup already closed or not visible")
        sections = ["hero", "menu", "about", "contact"]
        for sec in sections:
            elem = wait.until(EC.visibility_of_element_located((By.ID, sec)))
            time.sleep(1)  
            self.assertTrue(elem.is_displayed())
            print(f"TC-10 PASS: Section '{sec}' visible")
if __name__ == "__main__":
    unittest.main(verbosity=2)
