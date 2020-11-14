import os
from selenium import webdriver
from time import sleep
import re
import sys
import datetime

options = webdriver.ChromeOptions()
options.add_argument("headless")
driver = webdriver.Chrome("/Users/adsunarto/Downloads/chromedriver", chrome_options=options)
driver.get(sys.argv[1])

"""
Get article text
"""

main_tag = driver.find_element_by_id("main")
main_tag = main_tag.text.split('\n')
main_tag_para = []
# print(main_tag)
for i in main_tag:
  if i == "SHARE":
    break
  if i != "Play video content" and not i.isupper() and not re.search('\d*\/\d*\/\d*',i):
    main_tag_para.append(i)

print(main_tag_para)

"""
Get article images
"""

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

load_img = []
for i in range(5,5+num_img-23):
  images[i] = ''.join(images[i])
  load_img.append(images[i])
  # print(images[i])

print(load_img)

driver.quit()