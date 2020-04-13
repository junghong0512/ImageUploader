const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorname: { type: String, required: true },
  skills: [{ type: String, required: true }],
  images: [{ data: Buffer, contentType: String }],
});

const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;
