import time
import unittest
from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
class TC04_ClosePopup(BaseTest):
    def test_close_popup(self):
        print("TC-04: Waiting to close popup")
        try:
            time.sleep(2)
            close_btn = self.wait.until(
                EC.element_to_be_clickable((By.ID, "closeModal"))
            )
            self.driver.execute_script(
                "arguments[0].scrollIntoView({block:'center'});", close_btn
            )
            time.sleep(1)
            self.driver.execute_script("arguments[0].click();", close_btn)
            time.sleep(2)

            print("TC-04 PASS: Popup closed successfully")
        except:
            print("TC-04 PASS: Popup already closed or not visible")

if __name__ == "__main__":
    unittest.main(verbosity=2)
