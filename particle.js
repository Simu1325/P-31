class Particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(x,y,this.r, options)
        this.color=color(random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

