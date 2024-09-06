package dataStructure.lists;

public class Node<E> {
    protected E element;
    protected Node<E> next;

    public Node(E element) {
        this.element = element;
        next = null;
    }

    public E getElement() {
        return element;
    }

    public Node<E> getNext() {
        return next;
    }

    public void setElement(E element) {
        this.element = element;
    }

    public void setNext(Node<E> node) {
        this.next = node;
    }
}
