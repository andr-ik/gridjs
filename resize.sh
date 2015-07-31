i=0

for FN in `ls original/`; do

w=$(( ( RANDOM % 4 )  + 1 ))*100
h=$(( ( RANDOM % 2 )  + 1 ))*100

convert original/$FN -resize 400 $i.jpg
convert $i.jpg -crop $((w))x$((h))+0+0 $i.jpg
convert $i.jpg -resize 400 $i.jpg

i=$((i+1))

done

read -p "Press enter to continue..."