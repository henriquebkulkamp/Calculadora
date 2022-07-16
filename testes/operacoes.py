import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

options = webdriver.EdgeOptions()
options.add_argument('--headless')

while True:
    driver = webdriver.Edge(options=options)
    try:
        driver.get('http://localhost:2')

        driver.find_element(By.ID, 'numero-4').click()
        driver.find_element(By.ID, 'numero-9').click()
        driver.find_element(By.ID, 'numero-3').click()
        driver.find_element(By.ID, 'ponto').click()
        driver.find_element(By.ID, 'numero-7').click()
        driver.find_element(By.ID, 'dividir').click()
        driver.find_element(By.ID, 'numero-5').click()
        driver.find_element(By.ID, 'numero-6').click()
        driver.find_element(By.ID, 'multiplicar').click()
        driver.find_element(By.ID, 'numero-1').click()
        driver.find_element(By.ID, 'numero-9').click()
        driver.find_element(By.ID, 'somar').click()
        driver.find_element(By.ID, 'numero-8').click()
        driver.find_element(By.ID, 'igual').click()

        driver.close()
        
        print('--------------')
        print('deu tudo certo')
        print('--------------')
    
    except:
        print('deu errado mesmo')
    time.sleep(20)