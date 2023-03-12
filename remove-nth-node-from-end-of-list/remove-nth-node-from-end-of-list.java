/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null) return head ;
        if (head.next == null ) return null; 
        ListNode curr= head, prev = head;
        
        for (int i=0 ; i<n ; i++){
             if (curr.next == null) {
 
                // If count = N i.e. delete the head node
                if (i == n - 1) head = head.next;
                break;
            }
            curr = curr.next;
        }
        while (curr.next != null ){
            curr= curr.next; 
            prev=prev.next; 
        }
        prev.next = prev.next.next;  
        return head; 
 
        
    }
}