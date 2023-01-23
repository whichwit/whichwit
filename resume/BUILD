# load("@bazel_skylib//rules:run_binary.bzl", "run_binary")
load("@bazel_latex//:latex.bzl", "latex_document")

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
    name = "tex",
    srcs = [
      "resume.json",
      "resume.ejs"
    ],
    outs = ["resume.tex"],
    # cmd = "ejs -f $(location resume.json) -w $(location resume.ejs) -o abc",
    cmd = "ejs -f $(location resume.json) -w $(location resume.ejs) > $@",
    # tools = ["create_foo.pl"],
)

# genrule(
#   name = "resume",
#   srcs = glob([
#         "*.tex",
#         "*.bib",
#         "*.sty",        
#     ]) + [":tex"],
#   outs = ["resume.pdf"],
#   cmd = "pdflatex $(location :tex)"
# )

latex_document(
    name = "resume",
    srcs = glob([
        "*.tex",
        "*.bib",
        "*.sty",
    ]) + [
        # Other requirements.
    ],
    # main = "resume.tex",
    main = ":tex",
)