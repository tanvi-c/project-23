class rope{
	constructor(body1, body2, pointA, pointB)
	{
	this.pointA = pointA
	this.pointB = pointB

	var options={
		bodyA:body1, 
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}
	}
	//create rope constraint here
	ropeCon = Matter.Constraint.create( {
		length: 100,
		stiffness: 0.1} )
		World.add(world, ropeCon);
	}


    //create display() here 
	display() {
		push();
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		strokeWeight(2);
		line(body1, body2, pointA, pointB);
		pop();
	}
}
