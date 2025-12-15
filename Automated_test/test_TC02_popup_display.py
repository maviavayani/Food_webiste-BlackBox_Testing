import time
import unittest
from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
class TC02_PopupDisplay(BaseTest):
    def test_popup_display(self):
        print("TC-02: Waiting for popup to appear")
        time.sleep(2)
        popup = self.wait.until(
            EC.visibility_of_element_located((By.ID, "cityModal"))
        )
        time.sleep(1)
        self.assertTrue(popup.is_displayed())
        print("TC-02 PASS: Popup displayed successfully")
if __name__ == "__main__":
    unittest.main(verbosity=2)
