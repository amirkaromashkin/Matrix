/**
 * Created by Amirka on 1/9/2015.
 */
function getRandomChar() {
    return String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 + 1));
}