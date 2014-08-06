// QUEUE LIBRARY
function make_queue() {
    var queue = pair("queue", []);
    return queue;
}
function is_empty_queue(queue) {
    return is_empty_list(tail(queue));
}
function clean_queue(queue) {
    set_tail(queue, []);
}
function enqueue(queue, x) {
    set_tail(queue, append(tail(queue), list(x)));
}
function seek(queue) {
    var x = tail(queue);
    return (is_empty_list(x)) ? "Error: queue underflow"
                              : head(x);
}
function dequeue(queue) {
    var top = seek(queue);
    if (top!=="Error: queue underflow") {
        set_tail(queue, tail(tail(queue)));
    } else { 
        ;
    }
    return top;
}
// END QUEUE LIBRARY