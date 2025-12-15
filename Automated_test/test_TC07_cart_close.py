from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest
class TC07_CloseCart(BaseTest):
    def test_close_cart(self):
        time.sleep(3)
        try:
            close_popup = self.wait.until(
                EC.element_to_be_clickable((By.ID, "closeModal"))
            )
            self.driver.execute_script("arguments[0].click();", close_popup)
            time.sleep(2)
        except:
            pass  
        try:
            add_btn = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Add to Cart')]"))
            )
            self.driver.execute_script("arguments[0].click();", add_btn)
            time.sleep(2)
        except:
            pass 

        try:
            cart_icon = self.wait.until(
                EC.element_to_be_clickable((By.ID, "cart-icon"))
            )
            self.driver.execute_script("arguments[0].click();", cart_icon)
            time.sleep(2)
        except:
            pass  
        close_btn = self.wait.until(
            EC.element_to_be_clickable((By.XPATH, "//div[@id='cart-sidebar']//button[@onclick='toggleCartSidebar()']"))
        )
        self.driver.execute_script("arguments[0].click();", close_btn)
        time.sleep(2)
        sidebar = self.driver.find_element(By.ID, "cart-sidebar")
        self.assertNotIn("active", sidebar.get_attribute("class"))
        print("TC-07 PASS: Cart closed successfully")
if __name__ == "__main__":
    unittest.main(verbosity=2)
