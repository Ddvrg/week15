let year = prompt("Enter year =");//string
let year = parseInt("zodiac");//Convert String to Integer(number) 
function myZodiac(year,ily){
    switch(year)
    {
        case 1972: case 1984: case 1996: case 2008: case 2020:
            alert(`Rat Zodiac Sign ${ily}`);
            console.log(`Rat Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Rat Zodiac Sign ${ily}`;
            break;

        case 1973: case 1985: case 1997: case 2009: case 2021:
            alert(`Oxen Zodiac Sign ${ily}`);
            console.log(`Oxen Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Oxen Zodiac Sign ${ily}`;
            break;

        case 1974: case 1986: case 1998: case 2010: case 2022:
            alert(`Tiger Zodiac Sign ${ily}`);
            console.log(`Tiger Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Tiger Zodiac Sign ${ily}`;
            break;

        case 1975: case 1987: case 1999: case 2011: case 2023:
            alert(`Rabbit Zodiac Sign ${ily}`);
            console.log(`Rabbit Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Rabbit Zodiac Sign ${ily}`;
            break;

        case 1976: case 1988: case 2000: case 2012: case 2024:
            alert(`Dragon Zodiac Sign ${ily}`);
            console.log(`Dragon Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Dragon Zodiac Sign ${ily}`;
            break;

        case 1977: case 1989: case 2001: case 2013: case 2025:
            alert(`Snake Zodiac Sign ${ily}`);
            console.log(`Snake Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Snake Zodiac Sign ${ily}`;
            break;

        case 1978: case 1990: case 2002: case 2014: case 2026:
            alert(`Horse Zodiac Sign ${ily}`);
            console.log(`Horse Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Horse Zodiac Sign ${ily}`;
            break;

        case 1979: case 1991: case 2003: case 2015: case 2027:
            alert(`Sheep Zodiac Sign ${ily}`);
            console.log(`Sheep Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Sheep Zodiac Sign ${ily}`;
            break;

        case 1980: case 1992: case 2004: case 2016: case 2028:
            alert(`Monkey Zodiac Sign ${ily}`);
            console.log(`Monkey Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Monkey Zodiac Sign ${ily}`;
            break;

        case 1981: case 1993: case 2005: case 2017: case 2029:
            alert(`Rooster Zodiac Sign ${ily}`);
            console.log(`Rooster Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Rooster Zodiac Sign ${ily}`;
            break;

        case 1982: case 1994: case 2006: case 2018: case 2030:
            alert(`Dog Zodiac Sign ${ily}`);
            console.log(`Dog Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Dog Zodiac Sign ${ily}`;
            break;

        case 1983: case 1995: case 2007: case 2019: case 2031:
            alert(`Pig Zodiac Sign ${ily}`);
            console.log(`Pig Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Pig Zodiac Sign ${ily}`;
            break;
        
        default:
            alert(`ERROR Zodiac Sign ${ily}`)
            console.log(`Pig Zodiac Sign ${ily}`);
            document.getElementById("hContent").innerHTML = `Pig Zodiac Sign ${ily}`;
    } 
}

myZodiac(year,"I love you");