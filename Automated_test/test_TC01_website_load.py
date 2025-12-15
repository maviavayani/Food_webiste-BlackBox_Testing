from base_test import BaseTest
import unittest
class TC01_WebsiteLoad(BaseTest):

    def test_website_loads(self):
        self.assertIn("Foodie Delight", self.driver.title)
        print("TC-01 PASS: Website loaded")
if __name__ == "__main__":
    unittest.main(verbosity=2)