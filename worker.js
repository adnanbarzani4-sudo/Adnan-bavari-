
export default {
  async fetch(request, env) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Adnan Bavari Design</title>
<style>
*{box-sizing:border-box}
body{
 margin:0;
 background:#101610;
 color:white;
 font-family:Arial,sans-serif;
 text-align:center;
}
header{padding:65px 20px}
h1{color:#d6b56d;font-size:36px}
p{color:#ccc;line-height:1.8}
main{padding:30px 20px}
button{
 background:#d6b56d;
 color:#101610;
 border:0;
 padding:14px 25px;
 border-radius:8px;
 font-size:16px;
}
footer{padding:35px;color:#aaa}
</style>
</head>
<body>
<header>
<h1>ADNAN BAVARI DESIGN</h1>
<p>Professional Graphic Design Studio</p>
</header>
<main>
<h2>Welcome to Our Studio</h2>
<p>Creative Logos • Branding • Graphic Design • Printing</p>
<a href="https://wa.me/9647506950563">
<button>Contact Us on WhatsApp</button>
</a>
</main>
<footer>© 2026 Adnan Bavari Design</footer>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8"
      }
    });
  }
};
