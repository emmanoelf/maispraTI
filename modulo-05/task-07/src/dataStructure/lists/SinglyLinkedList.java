package dataStructure.lists;

public class SinglyLinkedList<E> {
    public Node<E> head;

    public SinglyLinkedList(){
        this.head = null;
    }

    public void add(E data){
        Node<E> newNode = new Node<E>(data);

        if(this.head == null){
            this.head = newNode;
        }else{
            Node<E> current = this.head;
            while(current.getNext() != null){
                current = current.getNext();
            }
            current.next = newNode;
        }
    }

    public E get(int index){
        Node<E> current = head;
        int count = 0;

        while(current != null){
            if(count == index){
                return current.getElement();
            }
            count++;
            current = current.getNext();
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/inválido.");
    }

    public void remove(int index){
        Node<E> current = this.head;

        if(this.head == null){
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido.");
        }

        if(index == 0){
            this.head = head.getNext();
            return;
        }

        int count = 0;
        Node<E> previous = null;

        while(current != null && count < index){
            previous = current;
            current = current.getNext();
            count++;
        }

        if(current.getNext() == null){
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido.");
        }

        previous.next = current.getNext();
    }

    public int size(){
        int count = 0;
        Node<E> current = this.head;

        while(current != null){
            count++;
            current = current.getNext();
        }

        return count;
    }

    public boolean isEmpty(){
        return this.head == null;
    }

    public void showAllElements(){
        Node<E> current = this.head;
        while(current != null){
            System.out.println(current.getElement());
            current = current.getNext();
        }
    }

}