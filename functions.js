
// display different HTML tag's effect and describe with user's choice
function HTML_code_display(code, describe) {

    var rep = document.getElementById("rep");
    var node = document.createElement(code);
    while (rep.hasChildNodes()) {
        rep.removeChild(rep.firstChild);
    }

    node.innerHTML = "Text  "
    if (code == "a") {
        node.setAttribute("href", "https://lms.uwa.edu.au")
    }
    else if (code == "form") {
        node.innerHTML = "Text: "
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", " input something....")
        node.appendChild(input);
    }
    else if (code == "table") {
        node.setAttribute("border", "1")
        for (let index = 0; index < 4; index++) {
            var tr = document.createElement("tr");
            for (let j = 0; j < 3; j++) {
                var td = document.createElement("td");
                td.innerHTML = "row:" + index + ", col:" + j;
                tr.appendChild(td);
            }
            node.appendChild(tr);
        }
    }
    else if (code == "ul" || code == "ol") {
        for (let index = 0; index < 4; index++) {
            var li = document.createElement("li");
            li.innerHTML = "list: " + index;
            node.appendChild(li);
        }
    }

    rep.appendChild(node);
    var des = document.getElementById("des");
    des.innerText = describe;
}

// show the different Pseudo-classes result and describe with user's choice
function PC_code_display(code, describe)
{
    document.getElementById("non_visited_link").classList = [code];
    document.getElementById("visited_link").classList = [code];
    var des = document.getElementById("des");
    des.innerText = describe;
}

// show the different js code, effect and describe with user's choice
function JS_code_display()
{
    // get select's value
    var selector = document.getElementById("selector");
    var index = selector.selectedIndex
    var selector_value= selector[index].value;

    //change and display the js' source code
    var codelist = ["document.getElementById('p1').\ninnerHTML='Hello world!';", 
    "var para=document.createElement('p');\nvar node = \ndocument.createTextNode('This is new.');\npara.appendChild(node);\ndocument.getElementById('div1').\nappendChild(para);", 
    "var parent=document.getElementById('div1');\nvar child = document.getElementById('p1');\nparent.removeChild(child);", 
    "var myWindow = window.open\n('','NewWindow','width=400,height=400')\nmyWindow.document.write('..')",
    "document.getElementById('p1').\ninnerHTML='Hello world!';", 
    "document.getElementById('p2').\nstyle.color='#6dc7ec';",
    "function validate_form() {\nvar x=document.forms['form']['f1'].value;\nif (!x ) {\nalert('...');\nreturn false;\n}\n}"];
    var code = document.getElementById("change_js_code");
    code.innerText = "<html>\n<body>\n<div id='div1'>\n\t<p id='p1'>Here is tag p1</p>\n\t<p id='p2'>Here is tag p2</p>\n</div>\n<script>\n\n" + codelist[selector_value] +"\n\n</script>\n</body>\n</html>";
    
    // renew the result:
    document.getElementById('div1').innerHTML = "<p id='p1'> Here is the tag P1 </p> <p id = 'p2'> Here is the tag P2</p >";

    //show the describe
    describe = ["Get the element with the specified ID",
    "Add an HTML element",
    "Remove an HTML element",
    "Write into the HTML output stream",
    "The innerHTML property can be used to examine the current HTML source of the page, including any changes that have been made since the page was initially loaded.",
    "The style property returns a 'CSSStyleDeclaration' object, which represents an element's style attribute.",
    "When the page is loaded, JavaScript makes an array forms in which it puts all the forms that are on the page.\n\nEach form has another array in which JavaScript puts all the elements in the form. With this, JavaScript can be used to validate input.\n\nIn this case, if a form field (f1) is empty, this function alerts a message, and returns false, to prevent the form from being submitted."];
    des.innerText = describe[selector_value];

    // show the result:
    switch (selector_value) {
        case "0":
        case "4":
            document.getElementById('p1').innerHTML = 'Hello world!';
            break;
        case "1":
            var para = document.createElement('p');
            var node = document.createTextNode('This is new.');
            para.appendChild(node);
            document.getElementById('div1').appendChild(para);
            break;
        case "2":
            var parent = document.getElementById('div1');
            var child = document.getElementById('p1');
            parent.removeChild(child);   
            break;
        case "3":
            var myWindow = window.open("", "NewWindow", "width=400, height=400");
            myWindow.document.write("<p>'write()' can write HTML elements with text directly to the HTML document.</p><p> In this case,you opened a new window called 'NewWindow', and write 'this' text into it</p><p>Here is the source code:</p><p>var myWindow = window.open('', 'NewWindow', 'width = 400, height = 400');<\p><p>myWindow.document.write('...');<\p>");
            break;
        case "5":
            document.getElementById('p2').style.color = '#6dc7ec';    
            break;
        case "6":
            document.getElementById('div1').innerHTML = "<form name='form' onsubmit='validate_form();'> Name: <input type='text' name='f1'> <input type='submit' value='Submit'></form>";
            code.innerText = "<html>\n<body>\n<div id='div1'>\n<form name='form' onsubmit='validate_form();'>\n Name: <input type='text' name='f1'>\n<input type='submit' value='Submit'>\n</form>\n<\div>\n<script>\n\n" + codelist[selector_value] + "\n\n</script>\n</body>\n</html>";
            break;
        default:
            break;
    }
}

// show the user how document.forms work.
function validate_form() {
    if (!document.forms["form"]["f1"].value) {
        alert("Value cannot be null");
    }
}

// Ajax instance, using ajax to get coronavirus data
function get_coronavirus_data()
{
    var request= new XMLHttpRequest()
    request.onreadystatechange=function() {
        // success, then send data to postChart(data) to post a virus chart
        if (this.readyState == 4 && this.status == 200) {
            var data = eval("["+request.responseText+"]");
            document.getElementById("coronavirus_data").innerHTML = "<p>Total death: " + data[0]["latest"]["deaths"] + " &nbsp;&nbsp;&nbsp;&nbsp;Total confirmed: " + data[0]["latest"]["confirmed"]+"</p ><div id='echarts_post'></div>";
            postChart(data);
        }
        // fail, then give the reason
        else if (this.readyState == 4){
            document.getElementById("coronavirus_data").innerHTML = "<p>Oops! there is some thing wrong...</p><p> HTTP status: " + this.status + " " + this.statusText + "</p>"
        }
        // not finish, then load loading img
        else if (this.readyState != 4)
        {

            document.getElementById("coronavirus_data").innerHTML = "<img class='loading' src='img//loading.gif' alt='fail'>";
        }
    }
    // we can generate an URL as long as any blanket be filled 
    var country_code = document.getElementById("country_code").value?"country_code="+document.getElementById("country_code").value:"";
    var country = document.getElementById("country").value ? "&country=" + document.getElementById("country").value : "";
    var province = document.getElementById("province").value ? "&province=" + document.getElementById("province").value : "";
    
    //remove space
    province = province.split(" ").join("%20");
    country = country.split(" ").join("%20");
    URL = "https://coronavirus-tracker-api.herokuapp.com/v2/locations?" + country_code + province + country +"&timelines=true";
    
    //send
    request.open("GET",URL,true)
    request.send()
}

// using "echart" to get a coronavirus's chart
function postChart(data) {
    // get useful data from json file
    var title = data[0]["locations"][0]["country"] +", "+ data[0]["locations"][0]["province"];
    var confirmed_timeline = data[0]["locations"][0]["timelines"]["confirmed"]["timeline"];
    var deaths_timeline = data[0]["locations"][0]["timelines"]["deaths"]["timeline"];
    
    // get the timeline of the spread of coronavirus
    var timeline=Object.keys(confirmed_timeline);
    for (let j = 0; j < timeline.length; j++) {
        timeline[j]=timeline[j].slice(0,10);
        
    }
    // get everyday's  confirmed and death number
    var confirmed_value = new Array(confirmed_timeline.length)
    var deaths_value = new Array(deaths_timeline.length)
    var i=0;
    for (let key in confirmed_timeline) {
        confirmed_value[i] = confirmed_timeline[key];
        i++;
    }    
    i = 0;
    for (let key in deaths_timeline) {
        deaths_value[i] = deaths_timeline[key];
        i++;
    }

    //give echart all the necessary parameters
    var myChart = echarts.init(document.getElementById('echarts_post'));
    var option = {

        title: {
            text: 'Coronavirus data in '+title,
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: timeline,
            boundaryGap: false,
            axisLabel: {
                showMaxLabel: true,
                rotate: 15,
                fontWeight: 'lighter',
            }
        },
        yAxis: {
            type: 'value',
            axisTick: { inside: true,},
            axisLabel: {
                fontWeight: 'lighter',
            }
        },
        series: [
            {
                name: 'confirmed',
                type: 'line',
                data: confirmed_value,
            },
            {
                name: 'death',
                type: 'line',
                data: deaths_value,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                },
    
            },

        ]
    };
    myChart.setOption(option);
}


