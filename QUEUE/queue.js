class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0
    }


    enqueue(val) {
        this.items[this.tail] = val;
        this.tail++;
        return this
    }

    dequeue() {
if(this.isEmpty()) return null;

const val = this.items[this.head]
delete this.items[this.head]
this.head++;
return val;
    }


    // Allow to show us the first
    peek() {
        return this.items[this.head]
    }



    isEmpty () {
        return this.head === this.tail
    }


    get size() {
        return this.tail - this.head
    }
}


// const file = new Queue()

// file.enqueue("Alice")
// console.log(file.size)

// file.enqueue("Bob")
// console.log(file.size)


// const premier = file.dequeue()
// console.log(premier)
// console.log(file.size)

// file.enqueue("Charlie")

// console.log(file.items)


/**
 * *********************************
 */

// const printer = new Queue();

// printer.enqueue("Contrat_Client.docx");
// printer.enqueue("photo")


// console.log(`Documents reçus : ${printer.size}`)


/***
 * 
 */

// const fileAttenteJeu = new Queue();

// // Les joueurs rejoignent la file
// fileAttenteJeu.enqueue("Player_Alpha");
// fileAttenteJeu.enqueue("Gamer_X");
// fileAttenteJeu.enqueue("Pro_Noob");

// function lancerPartie() {
//     // On vérifie s'il y a au moins 2 joueurs disponibles
//     if (fileAttenteJeu.size >= 2) {
//         const joueur1 = fileAttenteJeu.dequeue();
//         const joueur2 = fileAttenteJeu.dequeue();
//         console.log(`🎮 Match lancé ! ${joueur1} VS ${joueur2}`);
//     } else {
//         console.log("⏳ Pas assez de joueurs. En attente...");
//     }
// }

// lancerPartie(); 
// // 🖥️ Affiche : "🎮 Match lancé ! Player_Alpha VS Gamer_X"

// console.log(`Joueur restant dans la file : ${fileAttenteJeu.peek()}`);
// // 🖥️ Affiche : "Joueur restant dans la file : Pro_Noob"

// lancerPartie(); 
// // 🖥️ Affiche : "⏳ Pas assez de joueurs. En attente..." (Car Pro_Noob est tout seul)




function bfs(graph , start) {
    const visited = new Set([start])

    const queue = new Queue()
    queue.enqueue(start);


    while(!queue.isEmpty()) {
        const node = queue.dequeue();
        console.log(node)

        for(const neighbor of graph[node]) {
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.enqueue(neighbor)
            }
        }
    }
}


function maxSlidingWindow(nums, k) {
  const deque = []; // stocke des indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] <= i - k) deque.shift(); // sort les indices hors fenêtre
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}


function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const levelSize = queue.size;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.dequeue();
      level.push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    result.push(level);
  }
  return result;
}


