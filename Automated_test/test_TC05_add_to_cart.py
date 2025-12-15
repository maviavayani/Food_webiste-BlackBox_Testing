from base_test import BaseTest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest
class TC05_AddToCart(BaseTest):
    def test_add_to_cart(self):
        time.sleep(3)
        try:
            close = self.wait.until(
                EC.element_to_be_clickable((By.ID, "closeModal"))
            )
            self.driver.execute_script("arguments[0].click();", close)
            time.sleep(2)
        except:
            pass  
        btn = self.wait.until(
            EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(),'Add to Cart')]")
            )
        )
        self.driver.execute_script("arguments[0].click();", btn)
        time.sleep(2)
        cart = self.driver.find_element(By.ID, "cart-count")
        self.assertGreater(int(cart.text), 0)
        print("TC-05 PASS: Item added to cart")
if __name__ == "__main__":
    unittest.main(verbosity=2)
