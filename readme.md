# Readme

This project implemented fetching COVID-19 data on page 3

## Something about the coronavirus data

The data source has some bug:

1. The number of recovered people from that source is aways 0, so in my page, I didn't add this number.

2. When some of value the data source asked are missing, the output form is different.

eg. when country=USA, and other parameters missing, it will output the whole country's data

but when country=Australia, and other parameters missing, it will output every Australia province's data, but not the whole country's

In my page, The parameter missing is workable, but tthe chart it genarate depends on what value the data source send back.

3. Sometime this api can fail to access, it because some wifi will block the data source

## External modual

This project needs to run in a environment which contents echart and prism modual  

## IE backgroud fixed problem

IE has some bug with backgroud.
when you roll up or roll down, the backgroud might be flickering

