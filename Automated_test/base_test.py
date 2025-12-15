import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options

class BaseTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        options = Options()
        options.add_argument("--disable-blink-features=AutomationControlled")
        cls.driver = webdriver.Chrome(options=options)
        cls.wait = WebDriverWait(cls.driver, 15)
        cls.base_url = "http://localhost/project"
        cls.driver.get(cls.base_url)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()
