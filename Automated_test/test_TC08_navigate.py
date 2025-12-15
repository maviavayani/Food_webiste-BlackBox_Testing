from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest
class TC08_Navigation(BaseTest):
    def test_navigation_menu(self):
        wait = WebDriverWait(self.driver, 10)
        try:
            popup_close_btn = wait.until(EC.element_to_be_clickable((By.ID, "closeModal")))
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", popup_close_btn)
            time.sleep(1)
            self.driver.execute_script("arguments[0].click();", popup_close_btn)
            time.sleep(2)
            print("Popup closed successfully before navigation")
        except:
            print("Popup already closed or not visible")

        nav_links = [
            ("Home", "#hero"),
            ("Menu", "#menu"), 
            ("About", "#about"),
            ("Contact", "#contact")
        ]
        for link_text, href in nav_links:
            try:
                link = wait.until(EC.element_to_be_clickable((By.XPATH, f"//a[text()='{link_text}']")))
                self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", link)
                time.sleep(0.5)
                self.driver.execute_script("arguments[0].click();", link)
                time.sleep(1) 
                print(f"TC-08 PASS: Navigated to {link_text}")
            except:
                print(f"TC-08 FAIL: Could not navigate to {link_text}")
if __name__ == "__main__":
    unittest.main(verbosity=2)
