# Readme

## Something about the coronavirus data

The data source has some bug:

1. Number of recovered from that source is aways 0, so in my page, I didn't add this number.

2. When some of value the data source asked is missing, the output form is different.

eg. when country=USA, and other parameters missing, it will output the whole country's data

but when country=Australia, and other parameters missing, it will output every Australia province's data, but not the whole country's

In my page, The parameter missing is workable, but tthe chart it genarate depends on what value the data source send back.

3. Sometime this api can fail to access, it because some wifi will block this source

## External modual

This part is not write by me, just some other external modual

## IE backgroud fixed problem

IE has some bug with backgroud.
when you roll up or roll down, the backgroud might be flickering

