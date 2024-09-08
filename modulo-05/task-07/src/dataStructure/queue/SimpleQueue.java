package dataStructure.queue;

import utils.Node;

public class SimpleQueue<E> {
    private Node<E> first;
    private Node<E> last;

    public SimpleQueue(){
        this.first = null;
        this.last = null;
    }

    public void enqueue(E data){
        Node<E> newNode = new Node<E>(data);

        if(this.last == null){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.setNext(newNode);
            this.last = newNode;
        }
    }

    public E dequeue(){
        if(this.first == null){
            throw new IllegalStateException("Fila vazia!");
        }

        E data = this.first.getElement();
        this.first = this.first.getNext();

        if (this.first == null) {
            this.last = null;
        }

        return data;
    }

    public boolean isEmpty(){
        return this.first == null;
    }

    public void showAllElements(){
        Node<E> current = this.first;
        while(current != null){
            System.out.println(current.getElement());
            current = current.getNext();
        }
    }
}