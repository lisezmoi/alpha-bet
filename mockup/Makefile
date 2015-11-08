# Makefile for alpha-bet

STYLUS = node_modules/.bin/stylus
NIB = ./node_modules/nib/lib/nib

all: css

css: css/main.styl
	echo "Watching Stylus, output in main-min.css";\
	$(STYLUS) css/main.styl -u $(NIB) -w -o css/;\

deps:
	npm install

.PHONY: all  css deps
