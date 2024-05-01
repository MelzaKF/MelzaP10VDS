let P = []; //dari solve()
let t = []; //dari solve()
let r; // Materi Kelas: input user
let K; // Tugas: r dan K input user

//ini bisa juga jadi input
let P0 = 20; 
let dt = 0.1;
let tMax = 10;

let grafik; //Chart JS

function setup() {
  createCanvas(400,400);
  
  textSize(14); 






  r = createInput('masukan r','text'); 
  r.position(20, 60)
  K = createInput('masukan K','text'); 
  K.position(20, 90)
  let p = createP('Laju pertumbuhan dan Carrying Capacity  ')//teks biasa
  p.style('fontsize', '14px');
  p.position(20,20);


  
  solve();
  r.changed(solve);
  K.changed(solve);
  
  grafik = new Chart(this, config);
}

function draw() {
  background(220);
  
  grafik.update();

  
}


function solve(){
  
  P[0] = P0;
  t[0] = 0;
  rs = float(r.value());
  Ks = float(K.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt*rs*P[i]*(1 - P[i]/Ks);
    t[i+1] = round((i+1)*dt,3);
  }
}