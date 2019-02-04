The following command will list out all of the directories find will remove.  Do this from your root development dir.  (like /Projects or /GTATL201811FSF2)
find ./ -name "node_modules" -exec du -s {} \;

The following command will remove the directories.  Same thing as before.  Run it form the room dir that your projects are in.  ****WARNING**** If you run this from the "/" it will find everything on your hard drive named "node_modules" and remove it. Make sure you run the previous command so you know what your are deleting.  No Do Overs.****WARNING****
find ./ -name "node_module" -exec rm -rf {} \;
