class tree 
{
    constructor(x,y,width,height)
    {
    
        var options=
        {
            isStatic:true
        }

        this.treeObject=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.treeObject);

        this.width=width;
        this.height=height;

        this.image=loadImage("tree.png");

    }

    display()
    {
        var  treepos=this.treeObject.position
        imageMode(CENTER);
        image(this.image,treepos.x,treepos.y,this.width,this.height);
    }

}