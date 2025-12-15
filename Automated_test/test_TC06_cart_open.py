from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest
class TC06_OpenCart(BaseTest):
    def test_open_cart(self):

        time.sleep(3)
        try:
            close = self.wait.until(
                EC.element_to_be_clickable((By.ID, "closeModal"))
            )
            self.driver.execute_script("arguments[0].click();", close)
            time.sleep(2)
        except:
            pass  
        try:
            btn = self.wait.until(
                EC.element_to_be_clickable(
                    (By.XPATH, "//button[contains(text(),'Add to Cart')]")
                )
            )
            self.driver.execute_script("arguments[0].click();", btn)
            time.sleep(2)
        except:
            pass  
        icon = self.wait.until(
            EC.element_to_be_clickable((By.ID, "cart-icon"))
        )
        self.driver.execute_script("arguments[0].click();", icon)
        time.sleep(2)
        sidebar = self.driver.find_element(By.ID, "cart-sidebar")
        self.assertIn("active", sidebar.get_attribute("class"))
        print("TC-06 PASS: Cart opened successfully")

if __name__ == "__main__":
    unittest.main(verbosity=2)
