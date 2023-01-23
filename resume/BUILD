load("@bazel_skylib//rules:run_binary.bzl", "run_binary")

# run_binary(
#   name = "aa",
#   outs = ["resume.tex"],
#   args = ["-f resume.json -w -o resume.tex resume.ejs"],
#   tool = "/usr/bin/ejs",
# )

# filegroup(
#     name = "data",
#     srcs = ["resume.json"],
# )

genrule(
    name = "resume",
    srcs = [
      "resume.json",
      "resume.ejs"
    ],
    outs = ["resume.tex"],
    cmd = "ejs -f $(location resume.json) -w $(location resume.ejs) > $@",
    # tools = ["create_foo.pl"],
)