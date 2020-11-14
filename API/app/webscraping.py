import os
from selenium import webdriver
from time import sleep
import re

options = webdriver.ChromeOptions()
options.add_argument("headless")

driver = webdriver.Chrome("/Users/adsunarto/Downloads/chromedriver", chrome_options=options)
# driver.binary_location = "/Applications/Ease of Access/Google Chrome.app/Contents/MacOS/Google Chrome"
# chrome_driver_binary = "/usr/local/bin/chromedriver"
driver.get("https://www.tmz.com/2020/11/13/soles-by-sir-cleat-artist-designer-involved-serious-car-crash-nba-nfl/")
# driver.get(sys.argv[1])
main_tag = driver.find_element_by_id("main")
sleep(2)
images = driver.find_elements_by_tag_name("img")
for i in range(len(images)):
  images[i] = images[i].get_attribute("src")

num_img = 0
for i in range(5, len(images)-1):
  # print(images[i].split("/"))
  if not re.search(r'\bstatic\b', images[i]):
    num_img += 1
  else:
    break

images[5] = ''.join(images[5])
print(images[5])

for i in range(6,5+num_img):
  images[i] = ''.join(images[i])
  print(images[i])