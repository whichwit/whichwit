# ejs -f ./resume.json -o resume.tex resume.ejs
# sed -i "s/&#39;/'/g" resume.tex
node .  && pdflatex resume.tex && cp resume.pdf resume_yang_2023.pdf

