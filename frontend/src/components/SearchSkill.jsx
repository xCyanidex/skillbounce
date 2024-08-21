
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";

const SearchSkill = () => {

const [tags, setTags] = useState([]);

const [points,setPoints]=useState(10);

const handleChange=(value)=>{
setPoints(value);
}

  return (
    <>
      <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-10">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold my-4">Search for skills</h2>
          </div>
          <TagsInput
            value={tags}
            onChange={setTags}
            name="skills"
            placeHolder="enter skill tags"
          />
          <em>press enter to add new tag</em>
          <div className="  grid grid-cols-4 grid-rows-3 gap-4">
            <div className="md:col-span-2 col-span-4">
              <Label htmlFor="email">Keyword</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="md:col-span-2  col-span-4">
              <Label htmlFor="email">Keyword</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="md:col-span-2  col-span-4">
              <Label htmlFor="email">Location</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="md:col-span-2  col-span-4 flex flex-col justify-center space-y-2">
              <Label htmlFor="points">Max points: {points[0]}</Label>
              <Slider
                defaultValue={[points]}
                max={1000}
                step={1}
                onValueChange={handleChange}
              />
              <input type="hidden" name="points" value={points} />
            </div>
            <div className="col-span-4 text-center">
            <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchSkill