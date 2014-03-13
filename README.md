TestRequireJS
=============

Test of RequireJS as tool condidate for combining js files for the Flat/Adagio project. 

If RequireJS works as intended, we might be using it in replacement of [Smash](https://github.com/mbostock/smash). 
The problem with Smash is that it adds a new keyword : import. So we gets errors 
syntax, and there are some IDE features that we can't use anymore such as auto-formatting. 

### Done : 
 * basic usage of RequireJS to keep the same definition and usage pattern for Adagio

### TODO : 
 * use the optimization feature RequireJS in order to combine Adagio into one file. 
