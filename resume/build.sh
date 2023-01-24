ejs -f ./resume.json -o resume.tex resume.ejs
sed -i "s/&#39;/'/g" resume.tex
pdflatex resume.tex
