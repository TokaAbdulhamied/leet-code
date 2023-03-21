
# Approach 
this solution depends on the quick sort and quick select algorithms
### quick sort
- Selecting Pivot
- Rearranging the Array : all the elements less than the pivot are towards the left of it,
  and all the elements greater than the pivot are towards the right of it.

  ![alt text](https://miro.medium.com/v2/resize:fit:720/format:webp/1*oJMPKKBclYT0HjXK-py55w.png) 
  ![alt text](https://miro.medium.com/v2/resize:fit:720/format:webp/1*x1_b09fTK_Ep_ozn0TbINw.png) 
- Dividing Subarrays : break this problem into two sub-problems.
![alt text](https://miro.medium.com/v2/resize:fit:720/0*8FB82juugcflR_4i) 
### quick sort VS quick select
if we want to select the Kth largest or smalles element 
then we don't have to sort the full array, 
and we can ignore sorting one of the two sides, according to the pivot index at the end of the itiration. 

