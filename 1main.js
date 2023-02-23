//button code

document.getElementById('search-btn')
addEventListener('click', btnclicked)

//function

function btnclicked() {
    
// get search input
let name = document.getElementById("celeb-name").value.toLowerCase()
 

//celeb info

if( name === "beyonce"){
document.getElementById('celeb-info').innerHTML = `<img src="Beyoncé_at_The_Lion_King_European_Premiere_2019.png.webp" alt="beyonce" />
<h2>BEYONCE</h2>
<p>Beyoncé Giselle Knowles-Carte (born September 4, 1981)[5] is an American singer, songwriter, actress, and dancer. Beyoncé has been noted for her boundary-pushing artistry and her vocal ability.[6] Her success has made her a cultural icon and earned her the nickname "Queen Bey".[7]

Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as a member of the R&B girl group Destiny's Child, one of the best-selling girl groups of all time. Their hiatus saw the release of her debut album Dangerously in Love (2003), which featured the US Billboard Hot 100 number-one singles "Crazy in Love" and "Baby Boy". Following the 2006 disbanding of Destiny's Child, Beyoncé released her second solo album, B'Day, which contained singles "Irreplaceable" and "Beautiful Liar". Beyoncé also starred in multiple films such as Austin Powers in Goldmember (2002), The Pink Panther (2006), Dreamgirls (2006), Obsessed (2009), and The Lion King (2019). Her marriage to Jay-Z and her portrayal of Etta James in Cadillac Records (2008) influenced her third album, I Am... Sasha Fierce (2008), which earned a record-setting six Grammy Awards in 2010. It spawned the successful singles "If I Were a Boy", "Single Ladies", and "Halo". After professionally splitting from her manager and father Mathew Knowles in 2010, she released her musically diverse fourth album 4 in 2011.</p>`

}


else if(name === 'kim kardashian'){ document.getElementById('celeb-info').innerHTML = `<img src="President_Trump_Meets_with_Sentencing_Commutation_Recipients_(49624188912)_(cropped).jpg" alt="kim kardashian" />
<h2>Kim Kardashian</h2>
<p>Kimberly Noel Kardashian (formerly West; born October 21, 1980) is an American socialite, media personality, and businesswoman. She first gained media attention as a friend and stylist of Paris Hilton, but received wider notice after the sex tape Kim Kardashian, Superstar, shot in 2003 with her then-boyfriend Ray J, was released in 2007.[1] Later that year, she and her family began to appear in the E! reality television series Keeping Up with the Kardashians (2007–2021). Its success led to the formation of the spin-off series Kourtney and Kim Take New York (2011–2012), Kourtney and Kim Take Miami (2009–2013), and Hulu's The Kardashians (2022).

</p>`

}


















    
}
